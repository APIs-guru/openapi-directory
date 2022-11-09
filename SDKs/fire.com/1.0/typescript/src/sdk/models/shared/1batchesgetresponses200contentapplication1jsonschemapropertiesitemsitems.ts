import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult
/** 
 * The outcome of the attempted transaction.
**/
export class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum {
    Submitted = "SUBMITTED"
,    Removed = "REMOVED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


export class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=amountAfterCharges" })
  amountAfterCharges?: number;

  @Metadata({ data: "json, name=batchItemUuid" })
  batchItemUuid?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @Metadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @Metadata({ data: "json, name=icanTo" })
  icanTo?: number;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=ref" })
  ref?: string;

  @Metadata({ data: "json, name=refId" })
  refId?: number;

  @Metadata({ data: "json, name=result" })
  result?: OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult;

  @Metadata({ data: "json, name=status" })
  status?: OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}
