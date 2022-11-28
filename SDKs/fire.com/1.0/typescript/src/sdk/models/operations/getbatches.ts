import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBatchesBatchStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}

export enum GetBatchesBatchTypesEnum {
    InternalTransfer = "INTERNAL_TRANSFER",
    BankTransfer = "BANK_TRANSFER",
    NewPayee = "NEW_PAYEE"
}

export enum GetBatchesOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}

export enum GetBatchesOrderByEnum {
    Date = "DATE"
}


export class GetBatchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batchStatus" })
  batchStatus?: GetBatchesBatchStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batchTypes" })
  batchTypes?: GetBatchesBatchTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetBatchesOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetBatchesOrderByEnum;
}


// GetBatchesBatchItemsBatchItemResult
/** 
 * The outcome of the attempted transaction.
**/
export class GetBatchesBatchItemsBatchItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum GetBatchesBatchItemsBatchItemStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


export class GetBatchesBatchItemsBatchItem extends SpeakeasyBase {
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
  result?: GetBatchesBatchItemsBatchItemResult;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetBatchesBatchItemsBatchItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}


export class GetBatchesBatchItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetBatchesBatchItemsBatchItem })
  items?: GetBatchesBatchItemsBatchItem[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetBatchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchesQueryParams;
}


export class GetBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchItems?: GetBatchesBatchItems;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
