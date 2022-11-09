import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetTopReferrersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetTopReferrersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetTopReferrersPathParams;
}


export class ReposGetTopReferrersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.ReferrerTraffic })
  referrerTraffics?: shared.ReferrerTraffic[];
}
