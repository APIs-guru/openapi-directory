import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerConfigurationRevisionSummary
/** 
 * The summary of a worker configuration revision.
**/
export class WorkerConfigurationRevisionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
