import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstraintDetail } from "./constraintdetail";



export class ListConstraintsForPortfolioOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConstraintDetails", elemType: ConstraintDetail })
  constraintDetails?: ConstraintDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
