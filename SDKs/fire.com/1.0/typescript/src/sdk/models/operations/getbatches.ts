import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBatchesBatchStatusEnum {
    Submitted = "SUBMITTED"
,    Removed = "REMOVED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}

export enum GetBatchesBatchTypesEnum {
    InternalTransfer = "INTERNAL_TRANSFER"
,    BankTransfer = "BANK_TRANSFER"
,    NewPayee = "NEW_PAYEE"
}

export enum GetBatchesOrderEnum {
    Desc = "DESC"
,    Asc = "ASC"
}

export enum GetBatchesOrderByEnum {
    Date = "DATE"
}


export class GetBatchesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=batchStatus" })
  batchStatus?: GetBatchesBatchStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=batchTypes" })
  batchTypes?: GetBatchesBatchTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetBatchesOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetBatchesOrderByEnum;
}


export class GetBatchesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBatchesQueryParams;
}


// GetBatchesBatchItemsBatchItemResult
/** 
 * The outcome of the attempted transaction.
**/
export class GetBatchesBatchItemsBatchItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum GetBatchesBatchItemsBatchItemStatusEnum {
    Submitted = "SUBMITTED"
,    Removed = "REMOVED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


export class GetBatchesBatchItemsBatchItem extends SpeakeasyBase {
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
  result?: GetBatchesBatchItemsBatchItemResult;

  @Metadata({ data: "json, name=status" })
  status?: GetBatchesBatchItemsBatchItemStatusEnum;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}


export class GetBatchesBatchItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: operations.GetBatchesBatchItemsBatchItem })
  items?: GetBatchesBatchItemsBatchItem[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetBatchesResponse extends SpeakeasyBase {
  @Metadata()
  batchItems?: GetBatchesBatchItems;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
