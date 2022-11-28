import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StateModelGet } from "./statemodelget";
import { StatusDataModel } from "./statusdatamodel";
import { TimingsModelGet } from "./timingsmodelget";



export class DocumentModelGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=escalate" })
  escalate?: StateModelGet;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=files" })
  files?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=flag_for_review" })
  flagForReview?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inbox" })
  inbox: string;

  @SpeakeasyMetadata({ data: "json, name=last_version" })
  lastVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=lock" })
  lock?: StateModelGet;

  @SpeakeasyMetadata({ data: "json, name=meta_information" })
  metaInformation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=original_filename" })
  originalFilename: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount: number;

  @SpeakeasyMetadata({ data: "json, name=prediction" })
  prediction?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reject" })
  reject?: StateModelGet;

  @SpeakeasyMetadata({ data: "json, name=status_data" })
  statusData?: StatusDataModel;

  @SpeakeasyMetadata({ data: "json, name=submitted" })
  submitted?: StateModelGet;

  @SpeakeasyMetadata({ data: "json, name=timings" })
  timings?: TimingsModelGet;

  @SpeakeasyMetadata({ data: "json, name=usage_data" })
  usageData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=versions" })
  versions?: Map<string, any>[];
}
