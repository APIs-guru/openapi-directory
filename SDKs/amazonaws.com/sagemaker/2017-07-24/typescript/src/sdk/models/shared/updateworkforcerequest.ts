import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";


export class UpdateWorkforceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OidcConfig" })
  oidcConfig?: OidcConfig;

  @Metadata({ data: "json, name=SourceIpConfig" })
  sourceIpConfig?: SourceIpConfig;

  @Metadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
