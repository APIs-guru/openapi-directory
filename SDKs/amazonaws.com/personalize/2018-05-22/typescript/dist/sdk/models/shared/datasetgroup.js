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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// DatasetGroup
/**
 * <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p>
**/
var DatasetGroup = /** @class */ (function (_super) {
    __extends(DatasetGroup, _super);
    function DatasetGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], DatasetGroup.prototype, "creationDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=datasetGroupArn" }),
        __metadata("design:type", String)
    ], DatasetGroup.prototype, "datasetGroupArn", void 0);
    __decorate([
        Metadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], DatasetGroup.prototype, "failureReason", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyArn" }),
        __metadata("design:type", String)
    ], DatasetGroup.prototype, "kmsKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], DatasetGroup.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatasetGroup.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], DatasetGroup.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DatasetGroup.prototype, "status", void 0);
    return DatasetGroup;
}(SpeakeasyBase));
export { DatasetGroup };
