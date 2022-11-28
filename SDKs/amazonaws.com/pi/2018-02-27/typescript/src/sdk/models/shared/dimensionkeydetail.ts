import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailStatusEnum } from "./detailstatusenum";



// DimensionKeyDetail
/** 
 * An object that describes the details for a specified dimension.
**/
export class DimensionKeyDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DetailStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
