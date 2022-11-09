import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListManagedDataIdentifiersHeaders extends SpeakeasyBase {
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


export class ListManagedDataIdentifiersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class ListManagedDataIdentifiersRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListManagedDataIdentifiersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListManagedDataIdentifiersRequestBody;
}


export class ListManagedDataIdentifiersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listManagedDataIdentifiersResponse?: shared.ListManagedDataIdentifiersResponse;

  @Metadata()
  statusCode: number;
}
