import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodesOfConductGetForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodesOfConductGetForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodesOfConductGetForRepoPathParams;
}


export class CodesOfConductGetForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  codeOfConduct?: shared.CodeOfConduct;
}
