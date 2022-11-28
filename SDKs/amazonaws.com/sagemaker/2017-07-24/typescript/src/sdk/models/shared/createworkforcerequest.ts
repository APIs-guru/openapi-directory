import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";
import { Tag } from "./tag";



export class CreateWorkforceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoConfig" })
  cognitoConfig?: CognitoConfig;

  @SpeakeasyMetadata({ data: "json, name=OidcConfig" })
  oidcConfig?: OidcConfig;

  @SpeakeasyMetadata({ data: "json, name=SourceIpConfig" })
  sourceIpConfig?: SourceIpConfig;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
