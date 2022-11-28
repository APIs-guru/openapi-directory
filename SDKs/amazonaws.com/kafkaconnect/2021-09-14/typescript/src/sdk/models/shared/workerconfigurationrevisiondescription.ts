import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerConfigurationRevisionDescription
/** 
 * The description of the worker configuration revision.
**/
export class WorkerConfigurationRevisionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=propertiesFileContent" })
  propertiesFileContent?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
