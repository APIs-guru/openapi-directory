import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CodeScanningSarifsStatusProcessingStatusEnum {
    Pending = "pending",
    Complete = "complete"
}


export class CodeScanningSarifsStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyses_url" })
  analysesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=processing_status" })
  processingStatus?: CodeScanningSarifsStatusProcessingStatusEnum;
}
