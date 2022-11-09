import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteV3AssetChangesChangeSetsChangeSetIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=change-set-id" })
  changeSetId: number;
}


export class DeleteV3AssetChangesChangeSetsChangeSetIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteV3AssetChangesChangeSetsChangeSetIdPathParams;
}


export class DeleteV3AssetChangesChangeSetsChangeSetIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
