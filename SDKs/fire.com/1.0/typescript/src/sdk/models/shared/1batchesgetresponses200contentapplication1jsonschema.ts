import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult
/** 
 * The outcome of the attempted transaction.
**/
export class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum {
    Submitted = "SUBMITTED"
,    Removed = "REMOVED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


export class OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem extends SpeakeasyBase {
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
  result?: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemResult;

  @Metadata({ data: "json, name=status" })
  status?: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItemStatusEnum;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}


export class OnebatchesGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem })
  items?: OnebatchesGetResponses200ContentApplication1jsonSchemaBatchItem[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
