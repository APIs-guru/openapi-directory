import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListofApproversForBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetListofApproversForBatchBatchApproversApprovals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=mobileNumber" })
  mobileNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}


export class GetListofApproversForBatchBatchApprovers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvals", elemType: GetListofApproversForBatchBatchApproversApprovals })
  approvals?: GetListofApproversForBatchBatchApproversApprovals[];
}


export class GetListofApproversForBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListofApproversForBatchPathParams;
}


export class GetListofApproversForBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchApprovers?: GetListofApproversForBatchBatchApprovers;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
