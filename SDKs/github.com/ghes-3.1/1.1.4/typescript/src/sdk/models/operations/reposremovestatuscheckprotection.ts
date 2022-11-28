import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposRemoveStatusCheckProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveStatusCheckProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposRemoveStatusCheckProtectionPathParams;
}


export class ReposRemoveStatusCheckProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
