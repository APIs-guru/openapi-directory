import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult
/** 
 * The outcome of the attempted transaction.
**/
export class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


export class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountAfterCharges" })
  amountAfterCharges?: number;

  @SpeakeasyMetadata({ data: "json, name=batchItemUuid" })
  batchItemUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=icanTo" })
  icanTo?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=refId" })
  refId?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}
