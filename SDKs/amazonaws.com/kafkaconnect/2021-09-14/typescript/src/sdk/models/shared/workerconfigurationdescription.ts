import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerConfigurationDescription
/** 
 * The description of the worker configuration.
**/
export class WorkerConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=workerConfigurationArn" })
  workerConfigurationArn?: string;
}
