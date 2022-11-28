import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";



export class UpdateWorkforceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OidcConfig" })
  oidcConfig?: OidcConfig;

  @SpeakeasyMetadata({ data: "json, name=SourceIpConfig" })
  sourceIpConfig?: SourceIpConfig;

  @SpeakeasyMetadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
