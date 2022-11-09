import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyCreditsSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class CompanyCreditsSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyCreditsSearchReadPathParams;
}


export class CompanyCreditsSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
