import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableImportFindingsForProductHeaders extends SpeakeasyBase {
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
}


export class EnableImportFindingsForProductRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductArn" })
  productArn: string;
}


export class EnableImportFindingsForProductRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableImportFindingsForProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EnableImportFindingsForProductRequestBody;
}


export class EnableImportFindingsForProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enableImportFindingsForProductResponse?: shared.EnableImportFindingsForProductResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  statusCode: number;
}
