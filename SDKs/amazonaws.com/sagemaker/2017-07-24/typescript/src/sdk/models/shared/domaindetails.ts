import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";



// DomainDetails
/** 
 * The domain's details.
**/
export class DomainDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainArn" })
  domainArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
