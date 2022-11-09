import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetClonesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetClonesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: shared.PerEnum;
}


export class ReposGetClonesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetClonesPathParams;

  @Metadata()
  queryParams: ReposGetClonesQueryParams;
}


export class ReposGetClonesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  cloneTraffic?: shared.CloneTraffic;
}
