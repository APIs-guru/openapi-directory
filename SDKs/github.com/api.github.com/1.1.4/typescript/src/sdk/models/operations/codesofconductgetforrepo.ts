import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodesOfConductGetForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodesOfConductGetForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodesOfConductGetForRepoPathParams;
}


export class CodesOfConductGetForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  codeOfConduct?: shared.CodeOfConduct;
}
