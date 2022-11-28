import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGeofenceCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionArn" })
  collectionArn: string;

  @SpeakeasyMetadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
