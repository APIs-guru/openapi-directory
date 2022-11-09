import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchV1OrganicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=field" })
  field?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=total_only" })
  totalOnly?: boolean;
}


export class GetSearchV1OrganicRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchV1OrganicQueryParams;
}


export class GetSearchV1OrganicResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  organicResult?: shared.OrganicResult;

  @Metadata()
  statusCode: number;
}
