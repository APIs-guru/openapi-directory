import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListofApproversForBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetListofApproversForBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListofApproversForBatchPathParams;
}


export class GetListofApproversForBatchBatchApproversApprovals extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=mobileNumber" })
  mobileNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: number;
}


export class GetListofApproversForBatchBatchApprovers extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvals", elemType: operations.GetListofApproversForBatchBatchApproversApprovals })
  approvals?: GetListofApproversForBatchBatchApproversApprovals[];
}


export class GetListofApproversForBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchApprovers?: GetListofApproversForBatchBatchApprovers;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
