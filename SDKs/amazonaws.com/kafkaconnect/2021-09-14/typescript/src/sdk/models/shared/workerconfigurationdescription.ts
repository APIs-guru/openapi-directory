import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerConfigurationDescription
/** 
 * The description of the worker configuration.
**/
export class WorkerConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}
