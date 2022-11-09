import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformJobDefinition } from "./transformjobdefinition";


// ModelPackageValidationProfile
/** 
 * <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
**/
export class ModelPackageValidationProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfileName" })
  profileName: string;

  @Metadata({ data: "json, name=TransformJobDefinition" })
  transformJobDefinition: TransformJobDefinition;
}
