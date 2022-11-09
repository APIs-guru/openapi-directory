import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ValidationEnum } from "./validationenum";


export class UpdateResolverDnssecConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=Validation" })
  validation: ValidationEnum;
}
