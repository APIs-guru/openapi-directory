import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyCreditsSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=movie_title" })
  movieTitle: string;
}


export class CompanyCreditsSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyCreditsSearchReadPathParams;
}


export class CompanyCreditsSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
