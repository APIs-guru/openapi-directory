import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConstraintDetail } from "./constraintdetail";


export class ListConstraintsForPortfolioOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConstraintDetails", elemType: shared.ConstraintDetail })
  constraintDetails?: ConstraintDetail[];

  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
