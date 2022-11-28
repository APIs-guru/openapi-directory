import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationEnum } from "./validationenum";



export class UpdateResolverDnssecConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=Validation" })
  validation: ValidationEnum;
}
