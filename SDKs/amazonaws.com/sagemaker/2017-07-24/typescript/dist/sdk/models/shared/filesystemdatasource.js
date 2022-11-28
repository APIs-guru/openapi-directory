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
import { FileSystemAccessModeEnum } from "./filesystemaccessmodeenum";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
// FileSystemDataSource
/**
 * Specifies a file system data source for a channel.
**/
var FileSystemDataSource = /** @class */ (function (_super) {
    __extends(FileSystemDataSource, _super);
    function FileSystemDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryPath" }),
        __metadata("design:type", String)
    ], FileSystemDataSource.prototype, "directoryPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemAccessMode" }),
        __metadata("design:type", String)
    ], FileSystemDataSource.prototype, "fileSystemAccessMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], FileSystemDataSource.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemType" }),
        __metadata("design:type", String)
    ], FileSystemDataSource.prototype, "fileSystemType", void 0);
    return FileSystemDataSource;
}(SpeakeasyBase));
export { FileSystemDataSource };
