import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";


export class CreateGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedOperations" })
  allowedOperations: AllowedOperationEnum[];

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=GrantName" })
  grantName: string;

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=Principals" })
  principals: string[];
}
