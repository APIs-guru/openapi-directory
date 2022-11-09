import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerConfigurationRevisionDescription
/** 
 * The description of the worker configuration revision.
**/
export class WorkerConfigurationRevisionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=propertiesFileContent" })
  propertiesFileContent?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
