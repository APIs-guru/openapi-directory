import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";
import { Tag } from "./tag";


export class CreateWorkforceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CognitoConfig" })
  cognitoConfig?: CognitoConfig;

  @Metadata({ data: "json, name=OidcConfig" })
  oidcConfig?: OidcConfig;

  @Metadata({ data: "json, name=SourceIpConfig" })
  sourceIpConfig?: SourceIpConfig;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
