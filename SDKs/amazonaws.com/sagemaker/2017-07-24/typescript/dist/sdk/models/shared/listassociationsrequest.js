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
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { SortAssociationsByEnum } from "./sortassociationsbyenum";
import { SortOrderEnum } from "./sortorderenum";
var ListAssociationsRequest = /** @class */ (function (_super) {
    __extends(ListAssociationsRequest, _super);
    function ListAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationType" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "associationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAfter" }),
        __metadata("design:type", Date)
    ], ListAssociationsRequest.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBefore" }),
        __metadata("design:type", Date)
    ], ListAssociationsRequest.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationArn" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "destinationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationType" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "destinationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAssociationsRequest.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceArn" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "sourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], ListAssociationsRequest.prototype, "sourceType", void 0);
    return ListAssociationsRequest;
}(SpeakeasyBase));
export { ListAssociationsRequest };
