import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StateModelGet } from "./statemodelget";
import { StateModelGet } from "./statemodelget";
import { StateModelGet } from "./statemodelget";
import { StatusDataModel } from "./statusdatamodel";
import { StateModelGet } from "./statemodelget";
import { TimingsModelGet } from "./timingsmodelget";


export class DocumentModelGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=escalate" })
  escalate?: StateModelGet;

  @Metadata({ data: "json, name=feedback" })
  feedback?: Map<string, any>;

  @Metadata({ data: "json, name=files" })
  files?: Map<string, any>;

  @Metadata({ data: "json, name=flag_for_review" })
  flagForReview?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=inbox" })
  inbox: string;

  @Metadata({ data: "json, name=last_version" })
  lastVersion?: string;

  @Metadata({ data: "json, name=lock" })
  lock?: StateModelGet;

  @Metadata({ data: "json, name=meta_information" })
  metaInformation?: Map<string, any>;

  @Metadata({ data: "json, name=original_filename" })
  originalFilename: string;

  @Metadata({ data: "json, name=page_count" })
  pageCount: number;

  @Metadata({ data: "json, name=prediction" })
  prediction?: Map<string, any>;

  @Metadata({ data: "json, name=reject" })
  reject?: StateModelGet;

  @Metadata({ data: "json, name=status_data" })
  statusData?: StatusDataModel;

  @Metadata({ data: "json, name=submitted" })
  submitted?: StateModelGet;

  @Metadata({ data: "json, name=timings" })
  timings?: TimingsModelGet;

  @Metadata({ data: "json, name=usage_data" })
  usageData?: Map<string, any>;

  @Metadata({ data: "json, name=versions" })
  versions?: Map<string, any>[];
}
