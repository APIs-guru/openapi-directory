import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";



export class CreateGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedOperations" })
  allowedOperations: AllowedOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=GrantName" })
  grantName: string;

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=Principals" })
  principals: string[];
}
