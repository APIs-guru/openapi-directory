import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CodeScanningSarifsStatusProcessingStatusEnum {
    Pending = "pending"
,    Complete = "complete"
}


export class CodeScanningSarifsStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyses_url" })
  analysesUrl?: string;

  @Metadata({ data: "json, name=processing_status" })
  processingStatus?: CodeScanningSarifsStatusProcessingStatusEnum;
}
