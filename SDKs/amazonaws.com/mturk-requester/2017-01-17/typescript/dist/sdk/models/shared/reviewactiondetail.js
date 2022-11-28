var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewActionStatusEnum } from "./reviewactionstatusenum";
// ReviewActionDetail
/**
 *  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.
**/
var ReviewActionDetail = /** @class */ (function (_super) {
    __extends(ReviewActionDetail, _super);
    function ReviewActionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionId" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionName" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "actionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompleteTime" }),
        __metadata("design:type", Date)
    ], ReviewActionDetail.prototype, "completeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorCode" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Result" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetId" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetType" }),
        __metadata("design:type", String)
    ], ReviewActionDetail.prototype, "targetType", void 0);
    return ReviewActionDetail;
}(SpeakeasyBase));
export { ReviewActionDetail };
