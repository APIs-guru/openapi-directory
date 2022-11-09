import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReferenceDataSource } from "./referencedatasource";


// AddApplicationReferenceDataSourceRequest
/** 
 * <p/>
**/
export class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @Metadata({ data: "json, name=ReferenceDataSource" })
  referenceDataSource: ReferenceDataSource;
}
