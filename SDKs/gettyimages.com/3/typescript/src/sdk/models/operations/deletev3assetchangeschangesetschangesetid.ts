import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteV3AssetChangesChangeSetsChangeSetIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=change-set-id" })
  changeSetId: number;
}


export class DeleteV3AssetChangesChangeSetsChangeSetIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV3AssetChangesChangeSetsChangeSetIdPathParams;
}


export class DeleteV3AssetChangesChangeSetsChangeSetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
