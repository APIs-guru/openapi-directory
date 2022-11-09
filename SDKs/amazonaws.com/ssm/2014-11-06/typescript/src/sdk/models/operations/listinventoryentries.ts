import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListInventoryEntriesXAmzTargetEnum {
    AmazonSsmListInventoryEntries = "AmazonSSM.ListInventoryEntries"
}


export class ListInventoryEntriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListInventoryEntriesXAmzTargetEnum;
}


export class ListInventoryEntriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListInventoryEntriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListInventoryEntriesRequest;
}


export class ListInventoryEntriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilter?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  invalidTypeNameException?: any;

  @Metadata()
  listInventoryEntriesResult?: shared.ListInventoryEntriesResult;

  @Metadata()
  statusCode: number;
}
