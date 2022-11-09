import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListDocumentMetadataHistoryXAmzTargetEnum {
    AmazonSsmListDocumentMetadataHistory = "AmazonSSM.ListDocumentMetadataHistory"
}


export class ListDocumentMetadataHistoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDocumentMetadataHistoryXAmzTargetEnum;
}


export class ListDocumentMetadataHistoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListDocumentMetadataHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDocumentMetadataHistoryRequest;
}


export class ListDocumentMetadataHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentVersion?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  listDocumentMetadataHistoryResponse?: shared.ListDocumentMetadataHistoryResponse;

  @Metadata()
  statusCode: number;
}
