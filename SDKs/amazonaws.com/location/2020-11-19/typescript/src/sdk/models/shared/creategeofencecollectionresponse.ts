import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGeofenceCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionArn" })
  collectionArn: string;

  @SpeakeasyMetadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;
}
