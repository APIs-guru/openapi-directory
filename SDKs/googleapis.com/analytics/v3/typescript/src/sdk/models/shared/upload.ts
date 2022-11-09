import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Upload
/** 
 * Metadata returned for an upload operation.
**/
export class Upload extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=customDataSourceId" })
  customDataSourceId?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=uploadTime" })
  uploadTime?: Date;
}
