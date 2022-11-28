import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Upload
/** 
 * Metadata returned for an upload operation.
**/
export class Upload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=customDataSourceId" })
  customDataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadTime" })
  uploadTime?: Date;
}
