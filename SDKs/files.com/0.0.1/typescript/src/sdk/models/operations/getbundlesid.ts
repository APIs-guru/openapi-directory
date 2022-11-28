import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBundlesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetBundlesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBundlesIdPathParams;
}


export class GetBundlesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleEntity?: shared.BundleEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
